<template>
  <div>
    <v-container>

    <v-dialog v-model="dialog" max-width="300px">
      <v-btn color="primary" dark slot="activator" class="mb-2">Add Program</v-btn>

      <v-card>
        <v-card-title>
          <span class="headline">{{formTitle}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout row wrap>
              <v-flex>
                <v-text-field label="Program Name" v-model="editedItem.program_name"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex>
                <v-switch
                  :label="`Active: ${editedItem.program_is_active.toString()}`"
                  v-model="editedItem.program_is_active"
                ></v-switch>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      <v-layout>
        <v-flex>
          <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
        </v-flex>
      </v-layout>

    <v-data-table
      loading="true"
      class="elevation-1"
      :items="loadedPrograms"
      :headers="headers"
      :search="search"
      hide-actions>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.program_name }}</td>
        <td class="text-xs-right">{{ props.item.program_is_active }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
    </v-container>

    <v-snackbar
      :timeout="timeout"
      :top="y === 'top'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
      :color="color"
    >
      {{ snackText }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>
<style>

</style>
<script>
  import ProgramModel from '../../models/program'

  export default {
    data() {
      return {
        // Snackbar related items
        snackbar:false,
        y: 'top',
        x: null,
        mode: '',
        color:'green',
        timeout: 5000,
        snackText:'Changes Saved Successfully',
        dialog: false,
        editedIndex: -1,
        dialog: false,

        //Data Table items
        search:'',
        headers: ProgramModel.headers,
        editedItem: {
          program_name: "",
          program_is_active: false
        },
        defaultItem: {
          program_name: "",
          program_is_active: false
        }
      }
    },
    watch: {
      dialog(val) {
        val || this.close()
      }
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'Add Program' : 'Edit Program'
      },
      loadedPrograms() {
        return this.$store.getters.loadedPrograms
      }
    },
    methods: {
      editItem(item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true

      },
      deleteItem(item) {
        const index = this.loadedPrograms.indexOf(item)
        var cnfm = confirm('Are you sure you want to delete this item?')
        if (cnfm === true) {
          this.$store.dispatch('deleteProgram', this.loadedPrograms[index])
        }
      },
      save() {
        this.snackbar=true
        this.color = 'green'
        if (this.editedIndex > -1) {
          this.$store.dispatch('updateProgram', this.editedItem)
        } else {
          this.$store.dispatch('createProgram', this.editedItem)
        }
        this.close()
      },
      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
    },
    created() {
      this.items = this.$store.getters.loadedPrograms
    }
  }

</script>

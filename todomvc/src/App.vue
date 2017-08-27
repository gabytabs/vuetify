<template>
  <div id="app">
    <div class="container">
      <section class="input-list">
        <AddList @addList="addList" ></AddList>
      </section>

      <section class="lists">
        <List v-for="(list, index) in addedList"
              :list="list"
              :key="index"
              v-if="list.show === true"
              @remove="addedList.splice(index, 1)"
              @todoIsDone="markTodoDone">
        </List>
      </section>

      <section class="filter-list">
        <FilterLists
                @showAll="showAll"
                @showDone="showDone"
                @showUndone="showUndone">
        </FilterLists>
      </section>
    </div>
  </div>
</template>

<script>
  // Components Imports
  import AddList from './components/AddList.vue'
  import List from './components/List.vue'
  import FilterLists from './components/FilterLists.vue'

  export default {

    components: {
        AddList,
        List,
        FilterLists
    },

    name: 'app',

    data () {
      return {
        addedList: []
      }
    },

    methods: {
        addList(list) {
            this.addedList.push(list);
        },
        markTodoDone(doneList) {
            if(doneList.isDone === false) {
                doneList['isDone'] = true;
            } else {
                doneList['isDone'] = false;
            }
        },
        showAll() {
          this.addedList.map( list => {
              list['show'] = true;
          })
        },
        showDone() {
            this.addedList.map( list => {
                if(list.isDone === true) {
                    list['show'] = true;
                } else {
                    list['show'] = false;
                }
            })
        },
        showUndone() {
            this.addedList.map( list => {
                if(list.isDone === false) {
                    list['show'] = true;
                } else {
                    list['show'] = false;
                }
            })
        }
    }
  }
</script>

<style lang="scss">

  section.input-list{
    padding-top: 10px;
  }
  section.lists{
    padding-top: 40px;
  }
  section.filter-list{
    padding-top: 20px;
  }

</style>

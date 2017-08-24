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
              v-if="list.isDone === false"
              @remove="addedList.splice(index, 1)"
              @todoIsDone="markTodoDone">
        </List>
      </section>

      <FilterLists></FilterLists>
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

</style>

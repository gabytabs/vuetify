<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-for="sample in samples" v-bind:name="name"
                v-bind:colorname="sample">

                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
          return {
              name: "YoloSwag",
              samples: {
                  "colorsArray":[{
                      "colorName":"red",
                      "hexValue":"#f00"
                  },
                      {
                          "colorName":"green",
                          "hexValue":"#0f0"
                      },
                      {
                          "colorName":"blue",
                          "hexValue":"#00f"
                      },
                      {
                          "colorName":"cyan",
                          "hexValue":"#0ff"
                      },
                      {
                          "colorName":"magenta",
                          "hexValue":"#f0f"
                      },
                      {
                          "colorName":"yellow",
                          "hexValue":"#ff0"
                      },
                      {
                          "colorName":"black",
                          "hexValue":"#000"
                      }
                  ]
              }
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style lang="scss">
    div {
        background-color: lightblue;
    }
</style>
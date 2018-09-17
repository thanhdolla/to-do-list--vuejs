<template>
    <div id="card">
        <div id="list">
            <div id="add-row">
                <form @submit="addTask">
                    <div id="form">
                        <input ref="newtask" v-model="newTask" type="text" class="form form-control">
                        <button type="submit" class="form btn btn-info">{{ addNew }}</button>
                    </div>
                </form>
            </div>
            <h3> List Task ({{ tasks.length }})</h3>
            <ol class="list-group">
                <div id="" style="overflow:auto; height:280px;">
                    <li v-for="(task, index) in tasks" :key="index.id" class="list-group-item">
                        {{ task.body }}
                        <button @click="_delete(index)">&#10007;</button>
                        <button @click="editTask(task, index)">&#9998;</button>
                    </li>
                </div>
            </ol>
        </div>
    </div>
</template>

<script>
    import ChildList from "@/components/ChildList";

    export default {
        name: 'CardList',

        components: {
            ChildList,
        },

        data() {
            return {
                tasks: [],
                addNew: 'Add New',
                newTask: '',
            };
        },

        methods: {
            addTask: function (e) {
                e.preventDefault();
                if(this.newTask.length == 0) {
                    alert("The content can not empty!")
                } else {
                    this.tasks.push({
                        body: this.newTask,
                        completed: false,
                    });

                    this.newTask = "";
                }     
            },

            editTask: function (task, index) {
                this._delete(index);
                this.newTask = task.body;
                //set focus 
                this.$refs.newtask.focus();
            },

            _delete: function (task) {
                this.tasks.splice(task, 1);
            },

            addStore: function () {
                let listDo = this.tasks;
                this.$store.dispatch('addList', listDo);
                console.log(listDo);
            }
        },
    }
</script>

<style>
    .form{
        display: inline;
    }

    .btn{
        height:38px;
    }

    #card {
        position: relative;
        background: white;
        width: 700px;
        height: 520px;
        margin-top:50px;
        margin-left: 50px;
        border-radius: 7%;
        float:left;
    }

    #list {
        position: absolute;
        bottom: 10px;
        width: 90%;
        height: 94%;
        margin-left: 5%;
    }

    #add-row input {
        box-shadow: rgb(12, 102, 175);
        width: 300px;
        bottom: 10px;
        margin-left: 20px;
    }

    li button{
        /* font-size: px; */
        font-weight: bold;
        border:none;
        color:Red;
        background: white;
        float:right;
    }

    li{
        height:48px;
        width:500px
    }

    h3{
        margin-top: 20px;
        text-emphasis: center;
    }
</style>


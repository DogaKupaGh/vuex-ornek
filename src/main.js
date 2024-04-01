import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from "vuex";

const store = createStore({
    //container 
    state() {
        return {
            sayac : 0
        }     
    },
    mutations : {
        artirParametreile(state, payload){
            state.sayac = state.sayac + payload;
        }
    },
    getters :{
        getCounter(state){
            return state.sayac
        },
        sayacIncrements(state, getter){
            if(getter.getCounter >= 50){
                state = 10;
                return 10;
            }
            return getter.getCounter;
        }
    },
    action : {
        stateIncrements(context){
            context.commit('artirParametreile', 20)
        }
    }
})

//createApp(App).mount('#app')
const app = createApp(App)

// use the store in the App
app.use(store)

app.mount('#app')

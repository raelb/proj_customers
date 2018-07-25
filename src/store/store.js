
import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const store = {
    state: {
        customers: [
            {name: 'John'},
            {name: 'Fred'},
            {name: 'Alex'},
            {name: 'Joan'},            
        ]
    }
}

export default new vuex.Store(store)
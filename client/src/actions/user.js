import API from '../utils/API'

import { CREATE_USER, CREATE_USER_ERROR } from './types'

// action to create user
export const createUser = (formData) => async dispatch =>  {
    try {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const res = await API.createUser(formData, config)

        dispatch({
            type: CREATE_USER,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: CREATE_USER_ERROR,
        })
    }
}
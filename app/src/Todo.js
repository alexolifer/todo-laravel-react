import React, {useEffect, useState} from 'react';
import Form from './Components/Form'
import List from './Components/List'
import axios from "axios";

export default function Todo() {

    const [items, setItems] = useState([])

    useEffect(() => {

        getItems()

    }, [])

    function getItems() {
        axios.get('http://127.0.0.1:8000/api/items')
            .then(res => {
                console.log(res.data)
                setItems(res.data)
            })
    }

    function onAddItem(text) {

        let itm = {
            item: {
                name: text
            }
        }
        axios.post('http://127.0.0.1:8000/api/item/store', itm)
            .then(
                getItems
            )
    }

    function onItemChecked(item, status) {
        let itm = {}
        if (status === 'checked') {
            itm = {
                item: {
                    completed: true
                }
            }
        } else {
            itm = {
                item: {
                    completed: false
                }
            }
        }

        axios.put('http://127.0.0.1:8000/api/item/' + item.id, itm)
            .then(res => {
                console.log(res.data)
            })
            .then(
                getItems
            )
    }

    function onItemDeleted(item) {
        axios.delete('http://127.0.0.1:8000/api/item/' + item.id)
            .then(res => {
                console.log(res.data)
            })
            .then(
                getItems
            )
    }

    return (
        <div className={"p-16"}>
            <p>Todo</p>
            <Form onAddItem={onAddItem}/>
            <List onItemDeleted={onItemDeleted} onItemChecked={onItemChecked} items={items}/>
        </div>
    )
}

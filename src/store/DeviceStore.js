import {makeAutoObservable} from "mobx";
import DeviceDron from "../img/DeviceDron.jpg"

export default class DeviceStore {
    constructor() {
        this._devices = [
            {id:1, name: "Квадрокоптер", price: 50000, rating: 5, img: {DeviceDron}},
            {id:1, name: "Квадрокоптер", price: 50000, rating: 5, img: {DeviceDron}},
            {id:1, name: "Квадрокоптер", price: 50000, rating: 5, img: {DeviceDron}},
            {id:1, name: "Квадрокоптер", price: 50000, rating: 5, img: {DeviceDron}},
        ]
        makeAutoObservable(this)
    }

    setDevices(devices){
        this._devices = devices
    }

    get devices(){
        return this._devices
    }
}
import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this.types = []
        this.brands = []
        this.devices = []
        this.selectedType = {}
        this.selectedBrand = {}
        this.page = 1
        this.totalCount = 0
        this.limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this.types = types
    }

    setBrands(brands) {
        this.brands = brands
    }

    setDevices(devices) {
        this.devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this.selectedType = type
    }

    setSelectedBrand(brand) {
        this.selectedBrand = brand
    }

    setPage(page) {
        this.page = page
    }

    setTotalCount(count) {
        this.totalCount = count
    }

    getSelectedType() {
       return this.selectedType
    }

    getSelectedBrand() {
        return this.selectedBrand
    }

    getTypes() {
        return this.types
    }

    getBrands() {
        return this.brands
    }

    getDevices() {
        return this.devices

    }

    getTotalCount() {
        return this.totalCount
    }

    getPage() {
        return this.page
    }

    getLimit() {
        return this.limit
    }
}
let store = {
    _state: {
        vendorPage: {
            vendors: [
                { id: 1, name: 'Asus', fullName: 'AsusTek Computer Inc.' },
                { id: 2, name: 'Acer', fullName: 'Acer' }
            ],
            newName: 'Inventor',
            newFullName: 'Inventor'
        },
        cpuPage: {
            cpusData: [
                { id: '1', vendor: 'AMD', model: 'Ryzen 5 2600' },
                { id: '2', vendor: 'INTEL', model: 'Core i5 9400F' },
                { id: '3', vendor: 'AMD', model: 'Ryzen 7 2700' },
                { id: '4', vendor: 'AMD', model: 'Ryzen 5 3600' },
                { id: '5', vendor: 'AMD', model: 'A8 9600' },
                { id: '6', vendor: 'INTEL', model: 'Core i3 9100F' }
            ]
        },
        ramPage: {
            rams: [
                { id: 1, vendor: 'KINGSTON', model: 'VALUERAM KVR26N19S8', volume: '8 Gb' },
                { id: 2, vendor: 'CORSAIR', model: 'Vengeance LPX CMK16GX4M2A2666C16', volume: '8 Gb' },
                { id: 3, vendor: 'AMD Radeon', model: 'R7 Performance Series R748G2606U2S-UO', volume: '8 Gb' },
                { id: 4, vendor: 'CORSAIR', model: 'Vengeance LPX CMK16GX4M2B3200C16', volume: '8 Gb' },
                { id: 5, vendor: 'CRUCIAL', model: 'CT4G4DFS8266', volume: '4 Gb' },
                { id: 6, vendor: 'PATRIOT', model: 'Signature PSD48G266681', volume: '8 Gb' }
            ]

        },
        mboardPage: {
            mboards: [
                { id: 1, vendor: 'ASUS', model: 'ROG STRIX B360-F GAMING' },
                { id: 2, vendor: 'ASUS', model: 'PRIME B365M-A' },
                { id: 3, vendor: 'ASUS', model: 'PRIME B360M-K' },
                { id: 4, vendor: 'ASUS', model: 'TUF B450-PRO GAMING' },
                { id: 5, vendor: 'ASUS', model: 'TUF B450M-PRO GAMING' },
                { id: 6, vendor: 'GIGABYTE', model: 'B450M DS3H' }
            ],
            sokets: [
                { id: 1, soket: 'LGA 1700' },
                { id: 2, soket: 'LGA 1200' },
                { id: 3, soket: 'Socket R4 (LGA 2066)' },
                { id: 4, soket: 'Socket H4 (LGA 1151)' }
            ]
        },
        hddPage: {
            hdds: [
                { id: '1', vendor: 'WD', model: 'Caviar Blue WD10EZEX' },
                { id: '2', vendor: 'TOSHIBA', model: 'P300 HDWD110UZSVA' },
                { id: '3', vendor: 'SEAGATE', model: 'Barracuda ST1000DM010' },
                { id: '4', vendor: 'SEAGATE', model: 'Barracuda ST2000DM008' },
                { id: '5', vendor: 'WD', model: 'Blue WD10EZRZ' },
                { id: '6', vendor: 'WD', model: 'Blue WD20EZAZ' },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    changeNewVendors(newText) {
        this._state.vendorPage.newName = newText;
        this._callSubscriber(this._state);
    },
    changeNewFullVendors(newText) {
        this._state.vendorPage.newFullName = newText;
        this._callSubscriber(this._state);
    },
    addVendor() {
        let newVendor = {
            id: 3,
            name: this._state.vendorPage.newName,
            fullName: this._state.vendorPage.newFullName
        }
        this._state.vendorPage.vendors.push(newVendor);
        this._state.vendorPage.newName = '';
        this._state.vendorPage.newFullName = '';
        this._callSubscriber(this._state)
    },
    addCpu(textVendor, textModel) {
        let newCpu = {
            id: 7,
            vendor: textVendor,
            model: textModel
        }
        this._state.cpuPage.cpusData.push(newCpu);
        this._callSubscriber(this._state)
    },
    addHdd(textVendor, textModel) {
        let newHdd = {
            id: 7,
            vendor: textVendor,
            model: textModel
        }
        this._state.hddPage.hdds.push(newHdd);
        this._callSubscriber(this._state);
    },
    addRam(textVendor, textModel, textVolume) {
        let newRam = {
            id: 7,
            vendor: textVendor,
            model: textModel,
            volume: textVolume
    
        }
        this._state.ramPage.rams.push(newRam);
        this._callSubscriber(this._state)
    },
    addSoket(textSoket) {
        let newSoket = {
            id: 5,
            soket: textSoket
        }
        this._state.mboardPage.sokets.push(newSoket);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
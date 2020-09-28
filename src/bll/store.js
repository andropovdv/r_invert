import vendorReducer from './vendorReducer';
import cpuReducer from './cpuReducer';
import mboardReducer from './mboardReducer';

const TYPING_HDD_MODEL = 'TYPING-HDD-MODEL';
const TYPING_HDD_VENDOR = 'TYPING-HDD-VENDOR';
const ADD_HDD = 'ADD-HDD';
const TYPING_RAM_VENDOR = 'TYPING-RAM-VENDOR';
const TYPING_RAM_MODEL = 'TYPING-RAM-MODEL';
const ADD_RAM = 'ADD-RAM';

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
            ],
            typingVendor: 'vendor',
            typingModel: 'model'
        },
        ramPage: {
            rams: [
                { id: 1, vendor: 'KINGSTON', model: 'VALUERAM KVR26N19S8', volume: '8 Gb' },
                { id: 2, vendor: 'CORSAIR', model: 'Vengeance LPX CMK16GX4M2A2666C16', volume: '8 Gb' },
                { id: 3, vendor: 'AMD Radeon', model: 'R7 Performance Series R748G2606U2S-UO', volume: '8 Gb' },
                { id: 4, vendor: 'CORSAIR', model: 'Vengeance LPX CMK16GX4M2B3200C16', volume: '8 Gb' },
                { id: 5, vendor: 'CRUCIAL', model: 'CT4G4DFS8266', volume: '4 Gb' },
                { id: 6, vendor: 'PATRIOT', model: 'Signature PSD48G266681', volume: '8 Gb' }
            ],
            typingVendor: 'производитель',
            typingModel: 'модель',
            typingVolume: 'объем'

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
            ],
            typingSoket: 'soket'
        },
        hddPage: {
            hdds: [
                { id: '1', vendor: 'WD', model: 'Caviar Blue WD10EZEX' },
                { id: '2', vendor: 'TOSHIBA', model: 'P300 HDWD110UZSVA' },
                { id: '3', vendor: 'SEAGATE', model: 'Barracuda ST1000DM010' },
                { id: '4', vendor: 'SEAGATE', model: 'Barracuda ST2000DM008' },
                { id: '5', vendor: 'WD', model: 'Blue WD10EZRZ' },
                { id: '6', vendor: 'WD', model: 'Blue WD20EZAZ' },
            ],
            typingVendor: 'vendor',
            typingModel: 'model'
        }
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.vendorPage = vendorReducer(this._state.vendorPage, action);
        this._state.cpuPage = cpuReducer(this._state.cpuPage, action);
        this._state.mboardPage = mboardReducer(this._state.mboardPage, action);

        this._callSubscriber(this._state)

        if (action.type === TYPING_HDD_VENDOR) {
            this._state.hddPage.typingVendor = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === TYPING_HDD_MODEL) {
            this._state.hddPage.typingModel = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_HDD) {
            let newHdd = {
                id: 7,
                vendor: this._state.hddPage.typingVendor,
                model: this._state.hddPage.typingModel
            }
            this._state.hddPage.hdds.push(newHdd);
            this._state.hddPage.typingVendor = '';
            this._state.hddPage.typingModel = '';
            this._callSubscriber(this._state);
        } else if (action.type === TYPING_RAM_VENDOR) {
            this._state.ramPage.typingVendor = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === TYPING_RAM_MODEL) {
            this._state.ramPage.typingModel = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_RAM) {
            let newRam = {
                id: 7,
                vendor: this._state.ramPage.typingVendor,
                model: this._state.ramPage.typingModel,
                volume: this._state.ramPage.typingVolume

            }
            this._state.ramPage.rams.push(newRam);
            this._state.ramPage.typingModel = '';
            this._state.ramPage.typingVendor = '';
            this._state.ramPage.typingVolume = '';
            this._callSubscriber(this._state)
        }

    }
}




export const typingHddModelActionCreator = (textName) => {
    return { type: TYPING_HDD_MODEL, newText: textName }
}
export const typingHddVendorActionCreator = (textName) => {
    return { type: TYPING_HDD_VENDOR, newText: textName }
}
export const addHddActionCreator = () => {
    return { type: ADD_HDD }
}
export const typingRamVendorActionCreator = (textName) => {
    return { type: TYPING_RAM_VENDOR, newName: textName }
}
export const typingRamModelActionCreator = (textName) => {
    return { type: TYPING_RAM_MODEL, newName: textName }
}
export const addRamActionCreator = () => {
    return { type: ADD_RAM }
}

export default store;
import { rerenderEntireTree } from "../render";

let state = {
    vendorPage: {
        vendors: [
            { id: 1, name: 'Asus', fullName: 'AsusTek Computer Inc.' },
            { id: 2, name: 'Acer', fullName: 'Acer' }
        ]
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

}

export let addVendor = (textName, textFullName) => {
    let newVendor = {
        id: 3,
        name: textName,
        fullName: textFullName
    }
    state.vendorPage.vendors.push(newVendor);
    rerenderEntireTree(state)
}

export let addCpu = (textVendor, textModel) => {
    let newCpu = {
        id: 7,
        vendor: textVendor,
        model: textModel
    }
    state.cpuPage.cpusData.push(newCpu);
    rerenderEntireTree(state)
}

export default state;
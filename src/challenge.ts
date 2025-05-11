type DeviceName = 'Laptop' | 'Phone' | 'Light' | 'TV' | 'PC';
type RoomName = 'Bedroom' | 'Living room' | 'Kitchen';
type Device = {
  name: DeviceName;
  isOn: boolean;
};
type Room = {
  name: RoomName;
  devices: Device[];
};

interface SmartHome {
  rooms: Room[];
  addRoom(name: RoomName): void;
  addDevice(name: RoomName, deviceName: DeviceName): void;
  toggleDevice(name: RoomName, deviceName: DeviceName): void;
  displayAllDevice(name?: RoomName): void;
  getRoom(name: RoomName): Room | undefined;
  getDevice(room: Room, deviceName: DeviceName): Device | undefined;
}

/**
 *
 * displayAllDevice - barcha xonalardagi device larni chop etadi:
 * Example:
 *    "Bedroom: TV(on) | PC(off)"
 *    "Kitchen: Laptop(off) | Light(off)"
 * */

const smartHome: SmartHome = {
  rooms: [],
  addRoom(name: RoomName) {
    const room = this.rooms.find(room => room.name === name);

    if (room) throw new Error(`This ${name.toUpperCase()} already exist!!!`);

    this.rooms.push({ name, devices: [] });
  },
  addDevice(name: RoomName, deviceName: DeviceName) {
    const room = this.getRoom(name);
    if (!room) throw new Error(`This ${name.toUpperCase()} not exist!!!`);

    const device = this.getDevice(room, deviceName);
    if (device) throw new Error(`This ${deviceName.toUpperCase()} already exist!!!`);

    room.devices.push({ name: deviceName, isOn: false });
  },
  toggleDevice(name: RoomName, deviceName: DeviceName) {
    const room = this.getRoom(name);
    if (!room) throw new Error(`This ${name.toUpperCase()} not exist!!!`);

    const device = this.getDevice(room, deviceName);
    if (!device) throw new Error(`This ${deviceName.toUpperCase()} not exist!!!`);

    device.isOn = !device.isOn;
  },
  displayAllDevice(name?: RoomName) {
    for (const room of this.rooms) {
      console.log(
        `${room.name}: ${room.devices.map(device => `${device.name}(${device.isOn ? 'on' : 'off'})`).join(' | ')}`
      );
    }
  },
  getRoom(name) {
    return this.rooms.find(room => room.name === name);
  },
  getDevice(room, deviceName) {
    return room.devices.find(device => device.name === deviceName);
  }
};

try {
  smartHome.addRoom('Bedroom');
  smartHome.addRoom('Kitchen');
  smartHome.addDevice('Kitchen', 'Laptop');
  smartHome.addDevice('Bedroom', 'TV');
  smartHome.toggleDevice('Bedroom', 'TV');
  smartHome.toggleDevice('Bedroom', 'TV');
  smartHome.addDevice('Kitchen', 'Phone');
  smartHome.addDevice('Kitchen', 'TV');
  smartHome.toggleDevice('Kitchen', 'TV');
  smartHome.displayAllDevice();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

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
  addRoom(roomName: RoomName): void;
  addDevice(roomName: RoomName, device: Device): void;
  toggleDevice(roomName: RoomName, device: Device): void;
  displayAllDevice(roomName?: string): void;
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
  addRoom: function (roomName: RoomName): void {},
  addDevice: function (roomName: RoomName, device: Device): void {},
  toggleDevice: function (roomName: RoomName, device: Device): void {},
  displayAllDevice: function (roomName?: string): void {}
};

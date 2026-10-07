const findDeviceById = (devices, targetId) => {
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].id === targetId) return devices[i];
  }
  return null;
};

const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) return false;

  // Chỉ cập nhật khi thuộc tính ĐƯỢC TRUYỀN VÀO (kể cả "", false, 0)
  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive; // nhận cả false
  }

  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts; // nhận cả 0
  }

  return true;
};


const devices = [
  { id: "AC01", name: "Điều hòa phòng khách", isActive: true, powerWatts: 1200 },
  { id: "LAMP01", name: "Đèn ngủ", isActive: true, powerWatts: 10 },
];


console.log(updateDevice(devices, "AC01", { isActive: false })); // true
console.log(devices[0].isActive); 


console.log(updateDevice(devices, "LAMP01", { powerWatts: 0 })); // true
console.log(devices[1].powerWatts); 


console.log(updateDevice(devices, "XXX", { isActive: false })); // false


updateDevice(devices, "LAMP01", { name: "Đèn ngủ đầu giường" });
console.log(devices[1].powerWatts); 
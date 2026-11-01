const base = Process.getModuleByName("Clash of Clans").base;
const LogicDefines_OFFLINE_MODE = 0x2bc281;
const imageBase = 0x1000;

base.add(LogicDefines_OFFLINE_MODE - imageBase).writeU8(1);

const IAP_NOTICE_CHECK = 0x97b4c;
Memory.patchCode(base.add(IAP_NOTICE_CHECK - imageBase), 4, code => {
    code.writeByteArray([0x00, 0x20, 0x70, 0x47]);
});

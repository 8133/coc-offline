const base = Process.getModuleByName("Clash of Clans").base;
const LogicDefines_OFFLINE_MODE = 0x2d49d9;
const imageBase = 0x1000;

base.add(LogicDefines_OFFLINE_MODE - imageBase).writeU8(1);

const base = Process.getModuleByName("Clash of Clans").base;
const LogicDefines_OFFLINE_MODE = 0x2fd1e5;
const imageBase = 0x4000;

base.add(LogicDefines_OFFLINE_MODE - imageBase).writeU8(1);

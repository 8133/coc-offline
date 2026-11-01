const base = Process.getModuleByName("libg.so").base;
const LogicDefines_OFFLINE_MODE = 0x32b9a4;

base.add(LogicDefines_OFFLINE_MODE).writeU8(1);

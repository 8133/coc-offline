const base = Process.getModuleByName("libg.so").base;
const LogicDefines_OFFLINE_MODE = 0x2a11b6;

base.add(LogicDefines_OFFLINE_MODE).writeU8(1);

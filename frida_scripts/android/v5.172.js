const base = Process.getModuleByName("libg.so").base;
const LogicDefines_OFFLINE_MODE = 0x3b4758;

base.add(LogicDefines_OFFLINE_MODE).writeU8(1);

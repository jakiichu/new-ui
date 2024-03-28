enum EClassNameValues {
    INPUT_BASE = 'w-full my-1 py-2.5 px-3.5 border rounded-lg block bg-clip-padding box-border placeholder:text-[#B0B5BB] text-[#2F2F2F] border-[#DFE3E9]',
    INPUT_FOCUS = 'focus:border-[#58A0A3] focus:placeholder:text-[#8B99AB] focus:outline-none',
    INPUT_ACTIVE = 'active:border-[#58A0A3] active:outline-none',
    INPUT_DISABLED = 'disabled:bg-[#F2F5F9] disabled:border-[#DFE3E9]',
    INPUT_ERROR = 'border-[#E70000] focus:border-[#E70000] active:border-[#E70000]',
    LABEL_BASE = 'text-[#B0B5BB]',
    LABEL_FOCUS = 'has-[:focus]:text-[#58A0A3]',
    LABEL_ACTIVE = 'has-[:active]:text-[#58A0A3]',
    LABEL_DISABLED = 'has-[:disabled]:text-[#B0B5BB]',
    LABEL_ERROR = 'text-[#E70000]',
}

export {EClassNameValues}
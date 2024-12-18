export type NavItem = {
    path: string;
    component: React.LazyExoticComponent<React.ComponentType> | React.ComponentType,
    label: string; 
    permissions?: string[]; // TODO: implements permissions logic 
}

export type NavItems = NavItem[];
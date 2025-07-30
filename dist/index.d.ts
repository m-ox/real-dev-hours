interface RealDevHoursConfig {
    framework?: 'react' | 'vanilla' | 'vue' | 'svelte' | 'angular' | 'solid';
    enableLogs?: boolean;
    enableVisualChaos?: boolean;
    interval?: number;
    consoleNoiseLevel?: 'low' | 'medium' | 'high';
}
export declare function enableRealDevHours(config?: RealDevHoursConfig): void;
export {};

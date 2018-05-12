export declare function execAsync(command: string): Promise<boolean>;
export declare function ensureDirectoryExistence(filePath: string): true | undefined;
export declare function writeFileAsync(filePath: string, fileString: string, replace?: boolean): Promise<boolean>;

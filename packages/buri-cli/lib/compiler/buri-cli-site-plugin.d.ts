import { Compiler } from 'webpack';
export declare function genSiteEntry(): Promise<unknown>;
export declare class BuriCliSitePlugin {
    apply(compiler: Compiler): void;
}

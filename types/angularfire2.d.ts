export function AngularFireModule(): void;
export namespace AngularFireModule {
  function initializeApp(options: any, nameOrConfig: any): any;
  namespace ngInjectorDef {
    function factory(): any;
    const imports: any[];
    const providers: {
      deps: any;
      provide: any;
      useFactory: any;
    }[];
  }
}
export function FirebaseApp(): void;
export const FirebaseNameOrConfigToken: {
  ngInjectableDef: any;
  ngMetadataName: string;
};
export const FirebaseOptionsToken: {
  ngInjectableDef: any;
  ngMetadataName: string;
};
export class FirebaseZoneScheduler {
  constructor(zone: any, platformId: any);
  zone: any;
  platformId: any;
  keepUnstableUntilFirst(obs$: any): any;
  runOutsideAngular(obs$: any): any;
  schedule(...args: any[]): any;
}
export const RealtimeDatabaseURL: {
  ngInjectableDef: any;
  ngMetadataName: string;
};
export function runInZone(zone: any): any;
export function runOutsideAngular(zone: any): any;

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {
    private missingDocs: string = '';
    private blockingReason: string = '';
  
    setMissingDocs(docs: string) {
      this.missingDocs = docs;
    }
  
    getMissingDocs(): string {
      return this.missingDocs;
    }
  
    setBlockingReason(reason: string) {
      this.blockingReason = reason;
    }
  
    getBlockingReason(): string {
      return this.blockingReason;
    }
  
    clearData() {
      this.missingDocs = '';
      this.blockingReason = '';
    }
}

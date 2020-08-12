import { NgModule } from '@angular/core';
import { CalcPipe } from '../calc.pipe';

@NgModule({
  declarations: [CalcPipe],
  imports: [],
  exports: [CalcPipe],
})
export class PipesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { PagesModule } from '../pages/pages.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [ContainerComponent],
  declarations: [HeaderComponent, MainComponent, FooterComponent, ContainerComponent]
})
export class TemplateModule { }

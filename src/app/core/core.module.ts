import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Compoennt } from './component/error-404/error-404.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Compoennt,
        FooterComponent
    ],
    imports: [
        RouterModule.forChild([
            { 
                path: '**', component: Error404Compoennt   
            }
        ])
    ],
    exports: [
        NavBarComponent,
        FooterComponent
    ]
})
export class CoreModule { 

}

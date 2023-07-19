import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DropdownMenuComponent } from './pages/home/components/dropdown-menu/dropdown-menu.component';
import { ProductComponent } from './pages/home/components/product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        CartComponent,
        DropdownMenuComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

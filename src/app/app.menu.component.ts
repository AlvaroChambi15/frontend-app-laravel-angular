import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
                
            </ul>
        </div>
    `,
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'ADMINISTRACIÓN',
                items: [
                    { label: 'INICIO', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'PERFIL', icon: 'pi pi-fw pi-home', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Gestión Productos',
                items: [
                    { label: 'Categorias', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/categoria'] },
                    { label: 'Productos', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/producto'] },
                ]
            },
            {
                label: 'Gestión Pedidos',
                items: [
                    { label: 'Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'], badge: 'NEW' },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                ]
            },
            {
                label: 'PRUEBAS',
                items: [
                    { label: 'Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'], badge: 'NEW' },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo'] },
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement>event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}

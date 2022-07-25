import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPedidoComponent } from './index-pedido.component';

describe('IndexPedidoComponent', () => {
  let component: IndexPedidoComponent;
  let fixture: ComponentFixture<IndexPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

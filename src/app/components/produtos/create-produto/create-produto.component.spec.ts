import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProdutoComponent } from './create-produto.component';

describe('CreateProdutoComponent', () => {
  let component: CreateProdutoComponent;
  let fixture: ComponentFixture<CreateProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProdutoComponent]
    });
    fixture = TestBed.createComponent(CreateProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

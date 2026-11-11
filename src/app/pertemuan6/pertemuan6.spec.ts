import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pertemuan6 } from './pertemuan6';

describe('Pertemuan6', () => {
  let component: Pertemuan6;
  let fixture: ComponentFixture<Pertemuan6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pertemuan6],
    }).compileComponents();

    fixture = TestBed.createComponent(Pertemuan6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

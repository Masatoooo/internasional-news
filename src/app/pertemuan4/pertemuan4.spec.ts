import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pertemuan4 } from './pertemuan4';

describe('Pertemuan4', () => {
  let component: Pertemuan4;
  let fixture: ComponentFixture<Pertemuan4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pertemuan4],
    }).compileComponents();

    fixture = TestBed.createComponent(Pertemuan4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

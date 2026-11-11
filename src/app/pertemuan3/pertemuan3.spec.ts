import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pertemuan3 } from './pertemuan3';

describe('Pertemuan3', () => {
  let component: Pertemuan3;
  let fixture: ComponentFixture<Pertemuan3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pertemuan3],
    }).compileComponents();

    fixture = TestBed.createComponent(Pertemuan3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

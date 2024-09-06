import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpgradeItemsComponent } from './upgrade-items.component';

describe('UpgradeItemsComponent', () => {
  let component: UpgradeItemsComponent;
  let fixture: ComponentFixture<UpgradeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpgradeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

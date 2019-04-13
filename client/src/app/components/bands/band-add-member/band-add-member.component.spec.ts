import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandAddMemberComponent } from './band-add-member.component';

describe('BandAddMemberComponent', () => {
  let component: BandAddMemberComponent;
  let fixture: ComponentFixture<BandAddMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandAddMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandAddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

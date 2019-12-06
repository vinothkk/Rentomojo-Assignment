import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsetsPostDetailsComponent } from './usets-post-details.component';

describe('UsetsPostDetailsComponent', () => {
  let component: UsetsPostDetailsComponent;
  let fixture: ComponentFixture<UsetsPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsetsPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsetsPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

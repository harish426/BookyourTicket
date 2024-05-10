import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DetectComponent } from './detect.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { fakeAsync, tick } from '@angular/core/testing';

describe('DetectComponent', () => {
  let component: DetectComponent;
  let fixture: ComponentFixture<DetectComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DetectComponent],
        imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController); // Initialize httpTestingController
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure no outstanding requests
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with response_got set to false', () => {
    
  });

  it('should start with picture_error set to false', () => {
    
  });

  it('should show the file input field for image selection', () => {
    const fileInput = fixture.nativeElement.querySelector('#fileInput');
    expect(fileInput).toBeTruthy();
  });

  

  
  it('should handle HTTP request error', fakeAsync(() => {

    // Call the onSubmit function
   
    // Simulate an error response with a status code and error message
    const req = httpTestingController.expectOne('http://127.0.0.1:5000/submit');
    req.error(new ErrorEvent('HTTP request error'), { status: 500, statusText: 'Internal Server Error' });
    tick(2000);
  
    // Assertions for error handling
    

  }));

  
});

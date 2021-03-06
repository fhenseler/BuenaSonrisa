import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DentistShiftService } from '../../Services/dentist-shift.service';
import { ReviewService } from '../../Services/review.service';
import { PollService } from '../../Services/poll.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from "jquery";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import * as PDF from 'jspdf';
import html2canvas from 'html2canvas';
// import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-dentist-shift-viewer',
  templateUrl: './dentist-shift-viewer.component.html',
  styleUrls: ['./dentist-shift-viewer.component.css']
})
export class DentistShiftViewerComponent implements OnInit {

  @ViewChild('modal1',{static: true}) modal1: ElementRef;
  @ViewChild('modal2',{static: true}) modal2: ElementRef;

  @ViewChild('review',{static: true}) review: ElementRef;

  @Input() public id;
  @Input() public dni;

  public modalReference1: any = null;
  public modalReference2: any = null;
  public reviewReference: any = null;


  public form1: FormGroup;
  public form2: FormGroup;

  public dentistShiftList = [];

  public reviews = [];

  public user;

  //public isSpecialist: boolean = false;

  //public open: boolean = false;


  public show: number = 0;

  constructor(public dentistShift: DentistShiftService, private fireStore: AngularFirestore, private modalService: NgbModal, public formBuilder1: FormBuilder, public formBuilder2: FormBuilder, public reviewService: ReviewService, public pollService: PollService, private spinner: NgxSpinnerService) {

  	this.user = JSON.parse(localStorage.getItem('token'));

  	if(this.user.type == "Especialista"){
  		this.dentistShiftList = dentistShift.returnAllBySpecialist(this.user.lastName);
  		//this.isSpecialist = true;
  	}
  	else if(this.user.type == "Cliente"){
  		console.log(this.user.dni);
    	this.dentistShiftList = dentistShift.returnAllByDNI(this.user.dni);
  	}
  	else{
  		this.dentistShiftList = dentistShift.returnAll();
  	}

  	this.form1 = this.formBuilder1.group({
  			code: ['', [Validators.required]],
  			descReview: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(66)]]
  	});

  	this.form2 = this.formBuilder2.group({
  			dni: ['', [Validators.required]],
  			clinic: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
  			specialist: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
  			descPoll: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(66)]]
  	});
  	
  }

  ngOnInit() {
  }

  public attend(id: string, dni: string, date: string, hour: string, specialist: string) {

  	this.spinner.show();

  	const data: Object = {
  		dni: dni,
  		date: date,
  		hour: hour,
  		specialist: specialist,
  		status: 'Atendido'
  	};

	this.dentistShiftList = [];

  	this.fireStore.collection('dentistShifts').doc(id).set(data);

  	setTimeout(() => 
	{
	   location.reload();
	},
	3000);
  }

  public cancel(id: string){

  	this.spinner.show();

  	this.dentistShiftList = [];
  	
  	this.fireStore.collection('dentistShifts').doc(id).delete();

  	setTimeout(() => 
	{
	   location.reload();
	},
	3000)

  }

  public openModal1(id: string){


  	this.modalReference1 = this.modalService.open(this.modal1);

  	this.id = id;

  }

  public closeModal1(){
  	this.modalReference1.close();
  }

  public openModal2(dni: string){

  	this.modalReference2 = this.modalService.open(this.modal2);

  	this.dni = dni;

  }

  public closeModal2(){
  	this.modalReference2.close();
  }

  public tryReview(){

  	console.log(this.form1.valid);
  	console.log(this.form1.get('code').value);
  	console.log(this.form1.get('descReview').value);
  	
  	if(this.form1.valid){
  		const code: string = this.form1.get('code').value;
		const desc: string = this.form1.get('descReview').value;

		this.reviewService.reviewRegister(code, desc);
  	}
  }

  public viewReview(id: string){

  	this.reviewReference = this.modalService.open(this.review);

  	console.log(id);

  	this.reviews = this.reviewService.returnById(id);
  }

  public closeReview(){
  	this.reviewReference.close();
  }

  public tryPoll(){

  	console.log(this.form2.valid);
  	
  	if(this.form2.valid){
  		const dni: string = this.form2.get('dni').value;
  		const clinic: string = this.form2.get('clinic').value;
  		const specialist: string=  this.form2.get('specialist').value;
		const desc: string = this.form2.get('descPoll').value;

		this.pollService.pollRegister(dni, clinic, specialist, desc);
  	}
  }


  public generarPDF()  
  {  
    var data = document.getElementById('tablaPDF');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new PDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('PDFTurnos.pdf'); // Generated PDF   
    });  
  }  

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BreedService } from '../services/breed.service';
import { Breed } from '../interfaces/breed.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ImagesComponent } from '../images/images.component';
@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
})
export class BreedsComponent implements OnInit {
  displayedColumns = ['name', 'temperament', 'life_span', 'imperial'];
  dataSource: MatTableDataSource<Breed>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isLoading = false;

  constructor(private breedService: BreedService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Breed>();
  }

  ngOnInit(): void {
    this.getBreeds();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getBreeds() {
    this.isLoading = true;
    this.breedService.getBreeds().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.isLoading = false;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(breedId: string) {
    this.dialog.open(ImagesComponent, {
      data: {
        breedId: breedId,
      },
      height: '800px',
      width: '1000px',
    });
  }
}

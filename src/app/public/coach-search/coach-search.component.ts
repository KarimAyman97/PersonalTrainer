import { Coaches } from './../interfaces/Coaches';
import { Component, OnInit } from '@angular/core';
import { Filter } from '../interfaces/Filter';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-coach-search',
  templateUrl: './coach-search.component.html',
  styleUrls: ['./coach-search.component.scss'],
})
export class CoachSearchComponent implements OnInit {
  /* the pagnination configuration */
  public maxSize: number = 5;
  public directionLinks: boolean = true;
  public autoHide: boolean = true;
  public responsive: boolean = true;
  public config: PaginationInstance = {
    itemsPerPage: 7,
    currentPage: 1,
  };
  public labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
  };

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }
  /************************************************* */

  coaches: Coaches[] = [
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim A222man Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
    {
      image: 'assets/images/shaker.png',
      name: 'Karim Ayman Eid',
      title: 'modrb fsheeeeeeee5',
      description:
        'is simply dummy text of the printing and typesetting industry. LoremIpsumhas been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged.',
      rate: 5,
      price: 33,
    },
  ];

  speciality: Filter[] = [
    { name: 'doctor', checked: false },
    { name: 'coach', checked: false },
  ];
  constructor() {}

  ngOnInit(): void {}

  getRating(rate: number): number {
    return rate;
  }
}

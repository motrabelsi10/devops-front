import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../models/chambre.model'; // Importez votre modèle Chambre

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private apiUrl = 'http://192.168.186.130:8089/tpfoyer/chambre'; // L'URL de votre API

  constructor(private http: HttpClient) { }

  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/retrieve-all-chambres`);
  }

  getChambre(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.apiUrl}/retrieve-chambre/${id}`);
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiUrl}/add-chambre`, chambre);
  }

  modifyChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiUrl}/modify-chambre`, chambre);
  }

  removeChambre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-chambre/${id}`);
  }

  // Méthodes supplémentaires selon vos besoins
}

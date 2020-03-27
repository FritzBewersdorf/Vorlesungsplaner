package de.mcklinger.Fallstudioe.Vorlesung;


import de.mcklinger.Fallstudioe.Nutzer.Nutzer;
import de.mcklinger.Fallstudioe.Zeitraum.Zeitraum;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Vorlesung {

    private long vorId;
    private String vorTitel;
    private Date vorDatum;
    private Zeitraum zeitraum;
    private Nutzer nutzer;

    protected Vorlesung(){
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getVorId() {
        return vorId;
    }

    public void setVorId(long vorId) {
        this.vorId = vorId;
    }

    public String getVorTitel() {
        return vorTitel;
    }

    public void setVorTitel(String vorTitel) {
        this.vorTitel = vorTitel;
    }

    public Date getVorDatum() {
        return vorDatum;
    }

    public void setVorDatum(Date vorDatum) {
        this.vorDatum = vorDatum;
    }

    @ManyToOne
    @JoinColumn(name = "vor_zeit_id")
    public Zeitraum getZeitraum() {
        return zeitraum;
    }


    public void setZeitraum(Zeitraum zeitraum) {
        this.zeitraum = zeitraum;
    }

    @ManyToOne
    @JoinColumn(name = "vor_nut_id")
    public Nutzer getNutzer() {
        return nutzer;
    }

    public void setNutzer(Nutzer nutzer) {
        this.nutzer = nutzer;
    }
}

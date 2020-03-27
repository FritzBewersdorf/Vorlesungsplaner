package de.mcklinger.Fallstudioe.Nutzer;

import de.mcklinger.Fallstudioe.Status.Status;

import javax.persistence.*;

@Entity
public class Nutzer {

    private long nutId;
    private String nutVorname;
    private String nutNachname;
    private Status status;
    private String nutEmail;
    private String nutPasswort;

    protected Nutzer(){
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getNutId() {
        return nutId;
    }

    public void setNutId(long nutId) {
        this.nutId = nutId;
    }

    public String getNutVorname() {
        return nutVorname;
    }

    public void setNutVorname(String nutVorname) {
        this.nutVorname = nutVorname;
    }

    public String getNutNachname() {
        return nutNachname;
    }

    public void setNutNachname(String nutNachname) {
        this.nutNachname = nutNachname;
    }

    @ManyToOne
    @JoinColumn(name = "nut_status_id")
    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getNutEmail() {
        return nutEmail;
    }

    public void setNutEmail(String nutEmail) {
        this.nutEmail = nutEmail;
    }

    public String getNutPasswort() {
        return nutPasswort;
    }

    public void setNutPasswort(String nutPasswort) {
        this.nutPasswort = nutPasswort;
    }
}

package de.mcklinger.Fallstudioe.Zeitraum;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Time;

@Entity
public class Zeitraum {

    private long zeiId;
    private Time zeiBeginn;
    private Time zeiEnde;


    protected Zeitraum(){
    };

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getZeiId() {
        return zeiId;
    }

    public void setZeiId(long zeiId) {
        this.zeiId = zeiId;
    }

    public Time getZeiBeginn() {
        return zeiBeginn;
    }

    public void setZeiBeginn(Time zeiBeginn) {
        this.zeiBeginn = zeiBeginn;
    }

    public Time getZeiEnde() {
        return zeiEnde;
    }

    public void setZeiEnde(Time zeiEnde) {
        this.zeiEnde = zeiEnde;
    }
}

package de.mcklinger.Fallstudioe.Status;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Status {


    private long staId;
    private String staBezeichnung;

    protected Status () {
    }

    @Id
    public long getStaId() {return staId;
    }

    public void setStaId(long staId) {
        this.staId = staId;
    }

    public String getStaBezeichnung() {
        return staBezeichnung;
    }

    public void setStaBezeichnung(String staBezeichnung) {
        this.staBezeichnung = staBezeichnung;
    }
}
